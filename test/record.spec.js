import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Log in').getByText('Username:').click();
  await page.getByLabel('Log in').getByText('Password:').click();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('dialog', { name: 'Sign up' }).getByLabel('Close').click();
  await expect(page.locator('#login2')).toContainText('Log in');
  await page.getByRole('heading', { name: '$650' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('#loginpassword').press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('dialog', { name: 'New message' }).getByLabel('Close').click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});