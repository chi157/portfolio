# PowerShell script to create placeholder images - 4:3 vertical

[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$imgDir = "D:\chi157\portfolio\public\assets\img"

# Colors and labels - 4:3 vertical (300x400 px)
$photos = @(
    @{name='profile'; w=300; h=400; r=30; g=64; b=175; text='Proof'}
    @{name='photo1'; w=300; h=400; r=96; g=165; b=250; text='Life1'}
    @{name='photo2'; w=300; h=400; r=37; g=99; b=235; text='Life2'}
    @{name='photo3'; w=300; h=400; r=30; g=64; b=175; text='Life3'}
    @{name='photo4'; w=300; h=400; r=14; g=165; b=233; text='Life4'}
    @{name='photo5'; w=300; h=400; r=59; g=130; b=246; text='Life5'}
    @{name='photo6'; w=300; h=400; r=6; g=182; b=212; text='Life6'}
)

foreach ($photo in $photos) {
    $bitmap = New-Object System.Drawing.Bitmap($photo.w, $photo.h)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    $color = [System.Drawing.Color]::FromArgb($photo.r, $photo.g, $photo.b)
    $brush = New-Object System.Drawing.SolidBrush($color)
    $graphics.FillRectangle($brush, 0, 0, $photo.w, $photo.h)
    
    $font = New-Object System.Drawing.Font("Arial", 32, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $graphics.DrawString($photo.text, $font, $textBrush, $photo.w/2, $photo.h/2, $stringFormat)
    
    $filePath = Join-Path $imgDir "$($photo.name).jpg"
    $bitmap.Save($filePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $graphics.Dispose()
    $bitmap.Dispose()
    
    Write-Host "Created: $($photo.name).jpg (4:3 vertical $($photo.w)x$($photo.h))" -ForegroundColor Green
}

Write-Host "`nAll 4:3 vertical placeholder images created!" -ForegroundColor Cyan
Write-Host "Location: $imgDir" -ForegroundColor Cyan

