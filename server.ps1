# Servidor HTTP C# Multi-Hilo Nativo Ultra-Rápido (.NET) con Soporte Multi-Dispositivo
$code = @"
using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using System.Collections.Generic;

public class HighPerformanceServer {
    private HttpListener listener;
    private string rootDir;
    private string dbPath;
    private static readonly object _dbLock = new object();

    public HighPerformanceServer(string root, int port, string[] localIps) {
        rootDir = root;
        dbPath = Path.Combine(root, "db.json");
        listener = new HttpListener();
        listener.Prefixes.Add("http://127.0.0.1:" + port + "/");
        listener.Prefixes.Add("http://localhost:" + port + "/");

        if (localIps != null) {
            foreach (string ip in localIps) {
                if (!string.IsNullOrEmpty(ip) && ip != "127.0.0.1") {
                    try {
                        listener.Prefixes.Add("http://" + ip + ":" + port + "/");
                    } catch { }
                }
            }
        }

        try {
            listener.Prefixes.Add("http://+:" + port + "/");
        } catch { }
    }

    public void Start() {
        listener.Start();
        Console.WriteLine("=================================================================");
        Console.WriteLine("  SERVIDOR INTRANET COLEGIO EL EDUCADOR ACTIVO (MULTI-DISPOSITIVO)");
        Console.WriteLine("=================================================================");
        ThreadPool.QueueUserWorkItem(new WaitCallback(ListenLoop));
    }

    private void ListenLoop(object state) {
        while (listener.IsListening) {
            try {
                HttpListenerContext ctx = listener.GetContext();
                ThreadPool.QueueUserWorkItem(new WaitCallback((o) => ProcessRequest(ctx)));
            } catch { }
        }
    }

    private void ProcessRequest(HttpListenerContext ctx) {
        try {
            HttpListenerRequest req = ctx.Request;
            HttpListenerResponse res = ctx.Response;
            res.Headers.Add("Access-Control-Allow-Origin", "*");
            res.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            res.Headers.Add("Access-Control-Allow-Headers", "*");

            if (req.HttpMethod == "OPTIONS") {
                res.StatusCode = 200;
                res.Close();
                return;
            }

            string path = req.Url.AbsolutePath;
            if (path == "/" || string.IsNullOrEmpty(path)) path = "/index.html";

            if (path == "/api/state" || path == "/api/db") {
                byte[] data;
                lock (_dbLock) {
                    data = File.Exists(dbPath) ? File.ReadAllBytes(dbPath) : Encoding.UTF8.GetBytes("{}");
                }
                res.ContentType = "application/json; charset=utf-8";
                res.StatusCode = 200;
                res.OutputStream.Write(data, 0, data.Length);
            }
            else if (path == "/api/sync" && req.HttpMethod == "POST") {
                using (StreamReader reader = new StreamReader(req.InputStream, Encoding.UTF8)) {
                    string body = reader.ReadToEnd();
                    if (!string.IsNullOrEmpty(body)) {
                        lock (_dbLock) {
                            File.WriteAllText(dbPath, body, Encoding.UTF8);
                        }
                    }
                }
                byte[] msg = Encoding.UTF8.GetBytes("{\"success\":true,\"synced\":true}");
                res.ContentType = "application/json";
                res.StatusCode = 200;
                res.OutputStream.Write(msg, 0, msg.Length);
            }
            else if (path == "/api/server-info") {
                string hostName = Dns.GetHostName();
                string jsonInfo = "{\"status\":\"online\",\"host\":\"" + hostName + "\",\"timestamp\":\"" + DateTime.UtcNow.ToString("o") + "\"}";
                byte[] data = Encoding.UTF8.GetBytes(jsonInfo);
                res.ContentType = "application/json; charset=utf-8";
                res.StatusCode = 200;
                res.OutputStream.Write(data, 0, data.Length);
            }
            else if (path == "/api/backup") {
                byte[] data;
                lock (_dbLock) {
                    data = File.Exists(dbPath) ? File.ReadAllBytes(dbPath) : Encoding.UTF8.GetBytes("{}");
                }
                res.ContentType = "application/json; charset=utf-8";
                res.Headers.Add("Content-Disposition", "attachment; filename=backup_colegio_educador.json");
                res.StatusCode = 200;
                res.OutputStream.Write(data, 0, data.Length);
            }
            else {
                string localFile = Path.Combine(rootDir, path.TrimStart('/').Replace('/', '\\'));
                if (File.Exists(localFile)) {
                    string ext = Path.GetExtension(localFile).ToLower();
                    string mime = "application/octet-stream";
                    if (ext == ".html") mime = "text/html; charset=utf-8";
                    else if (ext == ".css") mime = "text/css; charset=utf-8";
                    else if (ext == ".js") mime = "application/javascript; charset=utf-8";
                    else if (ext == ".json") mime = "application/json; charset=utf-8";
                    else if (ext == ".png") mime = "image/png";
                    else if (ext == ".jpg" || ext == ".jpeg") mime = "image/jpeg";
                    else if (ext == ".svg") mime = "image/svg+xml";

                    byte[] data = File.ReadAllBytes(localFile);
                    res.ContentType = mime;
                    res.StatusCode = 200;
                    res.OutputStream.Write(data, 0, data.Length);
                } else {
                    res.StatusCode = 404;
                    byte[] notFound = Encoding.UTF8.GetBytes("404 Not Found");
                    res.OutputStream.Write(notFound, 0, notFound.Length);
                }
            }
            res.Close();
        } catch { }
    }
}
"@

Add-Type -TypeDefinition $code -Language CSharp

$localIps = [System.Net.Dns]::GetHostAddresses([System.Net.Dns]::GetHostName()) | 
    Where-Object { $_.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork } | 
    ForEach-Object { $_.ToString() }

Write-Host "Direcciones IP detectadas para conexion movil:"
foreach ($ip in $localIps) {
    Write-Host "  -> http://${ip}:8080/" -ForegroundColor Cyan
}

$server = New-Object HighPerformanceServer ($PSScriptRoot, 8080, [string[]]$localIps)
$server.Start()

Write-Host "Servidor ejecutandose. Presione Ctrl+C para detener." -ForegroundColor Green

while ($true) {
    Start-Sleep -Seconds 30
}
