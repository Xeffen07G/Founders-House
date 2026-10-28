Add-Type -AssemblyName System.Drawing

$inputPath = (Resolve-Path "assets\partner_header_logo.png").Path
$outputPath = Join-Path (Get-Location) "assets\partner_header_transparent.png"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)

# Check colors near corners to see checkerboard pattern
# Typically grey/white checkerboard has colors like (204,204,204) and (255,255,255)
# Or let's see what the top-left 10x10 pixels look like
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        # In checkerboard pattern, gray pixels are neutral (R ~ G ~ B) and brightness is high (e.g. > 180)
        # Meanwhile logos are:
        # 1. AIC Techno: Dark red (#8B1E22) and black text
        # 2. School of the Future: Black text + Red Techno circle (R ~ 210, G ~ 35, B ~ 35)
        # 3. Hult Prize: Black H + Pink text (#FF0080 or #E6007E where R is high, G is low, B is high)
        
        $isNeutral = ([Math]::Abs($p.R - $p.G) -le 10) -and ([Math]::Abs($p.G - $p.B) -le 10)
        $isCheckerboard = $isNeutral -and ($p.R -ge 185)

        if ($isCheckerboard) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $newBmp.SetPixel($x, $y, $p)
        }
    }
}

$bmp.Dispose()
$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()
Write-Host "Saved transparent logo to $outputPath"
