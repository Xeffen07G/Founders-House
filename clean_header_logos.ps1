Add-Type -AssemblyName System.Drawing

$inputPath = (Resolve-Path "assets\header_logos_raw.png").Path
$outputPath = Join-Path (Get-Location) "assets\header_logos_clean.png"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# The checkerboard background consists of shades of gray and white where R ~= G ~= B, and saturation is very low.
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        
        # Check if color is part of the checkerboard (light gray/white)
        # Checkboard squares are either ~204 or ~255
        $diffRG = [Math]::Abs($p.R - $p.G)
        $diffGB = [Math]::Abs($p.G - $p.B)
        $diffRB = [Math]::Abs($p.R - $p.B)
        $isGray = ($diffRG -le 8) -and ($diffGB -le 8) -and ($diffRB -le 8)
        
        # Notice the logos have black, dark red, red, pink, white accents
        # If it's a neutral gray with brightness between 170 and 255:
        if ($isGray -and ($p.R -ge 175)) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $newBmp.SetPixel($x, $y, $p)
        }
    }
}

$bmp.Dispose()
$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()
Write-Host "Created transparent header logo: $outputPath"
