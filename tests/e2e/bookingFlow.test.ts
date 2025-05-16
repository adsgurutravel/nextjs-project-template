import { test, expect } from '@playwright/test';

test.describe('Booking Flow', () => {
  test('should allow user to navigate and book a chauffeur service', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Navigate to Chauffeur page
    await page.click('text=Chauffeur');

    // Fill booking form
    await page.fill('input[name="pickup"]', 'Penang Airport');
    await page.fill('input[name="destination"]', 'George Town');
    await page.fill('input[name="date"]', '2024-07-01');

    // Submit booking form
    await page.click('text=Book Now');

    // Expect confirmation or redirect
    await expect(page).toHaveURL(/confirmation|success/);
    await expect(page.locator('text=Booking confirmed')).toBeVisible();
  });
});
