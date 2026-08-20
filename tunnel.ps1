# Script de Túnel Seguro Permanente con Auto-Reconexión Continua
while ($true) {
    try {
        Write-Host "Iniciando túnel seguro..."
        ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=4 -R 80:127.0.0.1:8080 serveo.net
    } catch {
        Write-Host "Reconectando túnel..."
    }
    Start-Sleep -Seconds 2
}
