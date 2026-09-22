Add-Type -AssemblyName System.Drawing

function Create-SiteIcon($size, $outputPath) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    # Clear transparent
    $g.Clear([System.Drawing.Color]::Transparent)

    # Rounded rectangle path
    $radius = [int]($size * 0.22)
    $diameter = $radius * 2
    $rect = New-Object System.Drawing.Rectangle(2, 2, ($size - 4), ($size - 4))
    
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddArc($rect.X, $rect.Y, $diameter, $diameter, 180, 90)
    $path.AddArc($rect.Right - $diameter, $rect.Y, $diameter, $diameter, 270, 90)
    $path.AddArc($rect.Right - $diameter, $rect.Bottom - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc($rect.X, $rect.Bottom - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()

    # Background gradient
    $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Point(0, 0)),
        (New-Object System.Drawing.Point($size, $size)),
        [System.Drawing.Color]::FromArgb(255, 15, 20, 36),
        [System.Drawing.Color]::FromArgb(255, 5, 7, 12)
    )
    $g.FillPath($bgBrush, $path)

    # Border gradient
    $borderPen = New-Object System.Drawing.Pen(
        (New-Object System.Drawing.Drawing2D.LinearGradientBrush(
            (New-Object System.Drawing.Point(0, 0)),
            (New-Object System.Drawing.Point($size, $size)),
            [System.Drawing.Color]::FromArgb(255, 0, 242, 254),
            [System.Drawing.Color]::FromArgb(255, 168, 85, 247)
        )),
        [Math]::Max(2, [int]($size * 0.03))
    )
    $g.DrawPath($borderPen, $path)

    # Stylized "A" and play button
    # Left leg
    $legWidth = [Math]::Max(2, [int]($size * 0.09))
    $aPen = New-Object System.Drawing.Pen(
        (New-Object System.Drawing.Drawing2D.LinearGradientBrush(
            (New-Object System.Drawing.Point(0, 0)),
            (New-Object System.Drawing.Point(0, $size)),
            [System.Drawing.Color]::FromArgb(255, 255, 255, 255),
            [System.Drawing.Color]::FromArgb(255, 0, 242, 254)
        )),
        $legWidth
    )
    $aPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $aPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    $topX = [int]($size * 0.5)
    $topY = [int]($size * 0.20)
    $leftX = [int]($size * 0.26)
    $leftY = [int]($size * 0.78)
    $rightX = [int]($size * 0.74)
    $rightY = [int]($size * 0.78)

    $g.DrawLine($aPen, $topX, $topY, $leftX, $leftY)
    $g.DrawLine($aPen, $topX, $topY, $rightX, $rightY)

    # Play Triangle in Center
    $pX1 = [int]($size * 0.44)
    $pY1 = [int]($size * 0.42)
    $pX2 = [int]($size * 0.64)
    $pY2 = [int]($size * 0.54)
    $pX3 = [int]($size * 0.44)
    $pY3 = [int]($size * 0.66)

    $playPoints = @(
        (New-Object System.Drawing.Point($pX1, $pY1)),
        (New-Object System.Drawing.Point($pX2, $pY2)),
        (New-Object System.Drawing.Point($pX3, $pY3))
    )

    $playBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Point($pX1, $pY1)),
        (New-Object System.Drawing.Point($pX2, $pY2)),
        [System.Drawing.Color]::FromArgb(255, 0, 242, 254),
        [System.Drawing.Color]::FromArgb(255, 168, 85, 247)
    )
    $g.FillPolygon($playBrush, $playPoints)

    # Highlight dot at peak
    $dotSize = [Math]::Max(3, [int]($size * 0.05))
    $dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.FillEllipse($dotBrush, ($topX - [int]($dotSize/2)), ($topY - [int]($dotSize/2)), $dotSize, $dotSize)

    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Created: $outputPath"
}

# Generate PNGs
Create-SiteIcon 16 "favicon-16x16.png"
Create-SiteIcon 32 "favicon-32x32.png"
Create-SiteIcon 48 "favicon-48x48.png"
Create-SiteIcon 180 "apple-touch-icon.png"
Create-SiteIcon 192 "icon-192.png"
Create-SiteIcon 512 "icon-512.png"

# Generate favicon.ico from 32x32 bitmap
$bmp32 = [System.Drawing.Bitmap]::FromFile("favicon-32x32.png")
$hIcon = $bmp32.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)
$fs = [System.IO.File]::OpenWrite("favicon.ico")
$icon.Save($fs)
$fs.Close()
$bmp32.Dispose()
Write-Output "Created: favicon.ico"
