import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
 // await expect(page.getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('combobox').selectOption('lohi');
  //await expect(page.locator('#inventory_filter_container')).toContainText('Products');
  //await page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button').click();
 //await page.getByRole('link', { name: '1' }).click();
  //await expect(page.locator('#contents_wrapper')).toContainText('Your Cart');
  //await page.locator('#cart_contents_container').getByText('1').click();
  //await page.locator('#cart_contents_container').getByText('1').click();
  await expect(page.getByRole('link', { name: 'CHECKOUT' })).toBeVisible();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await expect(page.getByText('Checkout: Your Information')).toBeVisible();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Jan');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Banan');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('123456');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'FINISH' }).click();
});