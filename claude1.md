Prompt for Claude (Add Solar Load Calculator Page)

Please create a new page on the website called “Load Calculator”.
The purpose of this page is to help users estimate their electricity load by selecting devices and usage hours.

Page Layout

A simple hero/banner at the top:

Title: “Solar Load Calculator”

Subtitle: “Estimate your daily energy needs by selecting common devices.”

Background: solid blue or solar panels image with overlay.

Calculator Section

Create a list of 5 common household devices pre-filled with their wattage (fixed values). Example devices:

Light Bulb – 15W

Fan – 75W

TV – 120W

Refrigerator – 200W

Laptop – 65W

For each device, user can input:

Quantity (number of devices).

Hours of Use per Day.

Calculation Logic

For each device: Wattage × Quantity × Hours = Daily Wh

Total Load (Wh) = Sum of all devices.

Convert to kWh = Total Wh ÷ 1000.

Display:

Total Daily Energy Consumption (kWh).

Suggested System Size (kW) = (Total Daily Load ÷ 5) approx. (just a demo rule of thumb).

Output (Results Section)

Show results in a clean box below the inputs.

Example:

Total Daily Load: 3.2 kWh

Suggested Solar System Size: 0.64 kW

Design Requirements

Use a card layout for devices (each device row in a white box with light border).

Show a “+ Add Device” button (optional, but for demo you can keep the 5 pre-filled devices).

Use the brand’s blue for buttons (“Calculate Load”).

Responsive: stack neatly on mobile.

Rules

Keep everything simple and demo-friendly.

No external API or backend needed — just front-end JavaScript calculation.

Make it clean, professional, and aligned with the site’s monochrome blue theme.