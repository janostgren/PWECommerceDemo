import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await test.step('HomePage', async () => {
        await page.goto('https://www.saucedemo.com/');
    });
    await test.step('Login', async () => {
        await expect(page.locator('#login_button_container')).toBeVisible();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

    });
    await test.step('Products', async () => {
        await expect(page.getByText('Products')).toBeVisible();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('#shopping_cart_container').click();

    });
    await test.step('Cart', async () => {
        await expect(page.locator('#header_container')).toContainText('Your Cart');
        await page.locator('[data-test="checkout"]').click();

    });
    await test.step('Checkout', async () => {
        await test.step('Checkout - Start', async () => {
            await page.locator('[data-test="firstName"]').click();
            await page.locator('[data-test="firstName"]').fill('Jan');
            await page.locator('[data-test="firstName"]').press('Tab');
            await page.locator('[data-test="lastName"]').fill('Banan');
            await page.locator('[data-test="lastName"]').press('Tab');
            await page.locator('[data-test="postalCode"]').fill('123456');
            await page.locator('[data-test="continue"]').click();

        });
        await test.step('Checkout - Finish', async () => {
            await expect(page.getByText('Checkout: Overview')).toBeVisible();
            await page.locator('[data-test="finish"]').click();

        });
        await test.step('Checkout - Show Order', async () => {
            await expect(page.getByRole('img', { name: 'Pony Express' })).toBeVisible();
            await page.getByText('Thank you for your order!Your').click();
          
        });
        await test.step('Back to products', async () => { 
            await page.locator('[data-test="back-to-products"]').click();

        });
    });

});