# Auto deploy script to Nginx
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "Starting Next.js build..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Cleaning old Nginx files..." -ForegroundColor Green
    
    # Clean destination folder first to prevent conflicts
    $destPath = "C:\nginx\nginx-1.29.4\html"
    Remove-Item -Path "$destPath\*" -Recurse -Force -ErrorAction SilentlyContinue
    
    Write-Host "Copying new files to Nginx..." -ForegroundColor Green
    
    # Copy all files to nginx html folder
    Copy-Item -Path "out\*" -Destination "$destPath\" -Recurse -Force
    
    Write-Host "Files copied! Reloading Nginx..." -ForegroundColor Green
    
    # Restart nginx
    try {
        cd C:\nginx\nginx-1.29.4
        
        # Force kill existing nginx processes
        Write-Host "Stopping existing Nginx processes..." -ForegroundColor Cyan
        taskkill /F /IM nginx.exe *>$null
        
        # Wait a brief moment
        Start-Sleep -Seconds 1
        
        # Start nginx completely fresh
        Start-Process .\nginx.exe
        Write-Host "Nginx started successfully." -ForegroundColor Green
    } catch {
        Write-Host "Warning: Failed to restart Nginx." -ForegroundColor Yellow
        Write-Host $_ -ForegroundColor Yellow
    }
    
    Write-Host "Deployment Complete! Website updated." -ForegroundColor Green
    Write-Host "Local: http://localhost" -ForegroundColor Cyan
    Write-Host "Public: http://chi157.com" -ForegroundColor Cyan
} else {
    Write-Host "Build failed! Please check error messages." -ForegroundColor Red
}

