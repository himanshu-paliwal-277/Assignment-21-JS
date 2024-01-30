// Q5. You are building a shipping application. Write a program that takes the type of package ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

// Type of package = ("standard", "express", or "overnight")
function calculate_delivary_time(package_type) {
  switch (package_type) {
    case "standard":
      console.log("Estimated delivery time for 'standard' package: 3-5 days.");
      break;
    case "express":
      console.log("Estimated delivery time for 'standard' package: 1-2 days.");
      break;
    case "overnight":
      console.log("Estimated delivery time for 'overnight' package: Next day.");
      break;
    default:
      console.log("Invalid Package");
      break;
  }
}

calculate_delivary_time("standard");
calculate_delivary_time("express");
calculate_delivary_time("overnight");
