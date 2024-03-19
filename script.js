function calculateCrossWindComponent() {
    const windSpeed = parseInt(document.getElementById('windSpeed').value, 10);
    const windGusts = parseInt(document.getElementById('windGusts').value, 10) || windSpeed;
    const windDirection = parseInt(document.getElementById('windDirection').value, 10);
    const runway = parseInt(document.getElementById('runway').value, 10);

    const gustFactor = (windGusts - windSpeed) * 0.5;
    const effectiveWindSpeed = windSpeed + gustFactor;

    const runwayDirection = runway * 10;
    const windAngle = Math.abs(runwayDirection - windDirection);
    const crossWindComponent = Math.sin(windAngle * Math.PI / 180) * effectiveWindSpeed;

    document.getElementById('result').textContent = `Crosswind Component: ${crossWindComponent.toFixed(2)} kts`;

    drawRunway(runwayDirection);
}

function calculateCrossWindComponent() {
    const windSpeed = parseInt(document.getElementById('windSpeed').value, 10);
    const windGusts = parseInt(document.getElementById('windGusts').value, 10);
    const windDirection = parseInt(document.getElementById('windDirection').value, 10);
    const runway = parseInt(document.getElementById('runway').value, 10);

    // Calculate the gust factor
    const gustFactor = windGusts > windSpeed ? (windGusts - windSpeed) / 2 : 0;

    // Apply gust factor to the wind speed for the crosswind calculation
    const effectiveWindSpeed = windSpeed + gustFactor;

    const runwayDirection = runway * 10;
    let windAngle = Math.abs(windDirection - runwayDirection);
    if (windAngle > 180) {
        windAngle = 360 - windAngle; // Normalize angle to 0-180 degrees
    }

    // Calculate the crosswind component
    const crossWindComponent = Math.sin(windAngle * Math.PI / 180) * effectiveWindSpeed;

    // Check if the angle is greater than 90 for tailwind component adjustments
    if (windAngle > 90) {
        document.getElementById('result').innerHTML = `Crosswind Component: ${crossWindComponent.toFixed(2)} kts`;
        document.getElementById('result').classList.add('tailwindComponent');
        document.getElementById('cautionTailwind').style.display = 'block';
    } else {
        document.getElementById('result').textContent = `Crosswind Component: ${crossWindComponent.toFixed(2)} kts`;
        document.getElementById('result').classList.remove('tailwindComponent');
        document.getElementById('cautionTailwind').style.display = 'none';
    }

    document.getElementById('angleResult').textContent = `Crosswind Angle: ${windAngle}°`;
}

