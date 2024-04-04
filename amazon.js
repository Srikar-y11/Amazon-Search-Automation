

// describe('Amazon Test', function() {

//     it('Second Test', async () => {

//         browser.url('https://www.amazon.in/')

//         await $('[name="field-keywords"]').setValue('Cricket Bat')

//         (await $('[id="nav-search-submit-button"]')).waitForClickable()

//         browser.pause(10000)

//     })
// })

describe('Amazon Test', function() {
    it('Searches for a Cricket Bat', async () => {
        // Navigate to Amazon India website
        await browser.url('https://www.amazon.in/');

        // Set value in the search field
        const searchField = await $('[name="field-keywords"]');
        await searchField.setValue('Cricket Bat');

        // Wait for the search button to be clickable
        const searchButton = await $('[id="nav-search-submit-button"]');
        await searchButton.waitForClickable();

        // Click on the search button
        await searchButton.click();

        // You can add further test steps here, like verifying search results.
    });
});
