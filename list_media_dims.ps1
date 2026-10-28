Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\sayak\.gemini\antigravity-ide\brain\e9b463d6-23db-4ea5-a57a-142fbd652762\.tempmediaStorage"
Get-ChildItem $dir -Filter "*.png" | ForEach-Object {
    try {
        $img = [System.Drawing.Image]::FromFile($_.FullName)
        Write-Host "$($_.Name) : $($img.Width) x $($img.Height) ($($_.Length) bytes)"
        $img.Dispose()
    } catch {}
}
