/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This is our first test suite.
    *  Refer to app.js
    */
    describe('RSS Feeds', function() {
        /* Test if allFeeds array is defined and is not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed in the allFeeds variable,
         * and checks that the URL is not empty.
         */

         it('urls are defined', function() {
           for(let i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

        /* Test that loops through each feed in the allFeeds variable,
         * and checks that each name is defined and is not empty.
         */

         it('feed names are defined', function() {
           for(let i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });
    });

    /* This is the second test suite.
     * Refer to index.html & style.css
     */
    describe('The menu', function() {
        const BODY = $('body'),
              MENU_ICON = $('.menu-icon-link');

         /* Test if the menu element is hidden by default. */

         it('should ensure that menu element is hidden by default', function() {
           expect(BODY.hasClass('menu-hidden')).toEqual(true);
         });

         /* Test the visibility of the menu icon when clicked.
          * Expectations: menu icon displays and hides
          */

           it('should display and hide menu icon on click event', function() {
             MENU_ICON.click();
             expect(BODY.hasClass('menu-hidden')).toBe(false);
             MENU_ICON.click();
             expect(BODY.hasClass('menu-hidden')).toBe(true);
           });
      });

    /* This is the third test suite
     * Refer to app.js
    */
    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, done);
      });

        /* Test if there is at least a single .entry element within
         * the .feed container after the loadFeed function is called.
         * Tip: loadFeed() is asynchronous
         */
         it('should ensure there is a single entry within feed container', function() {
           expect($('.feed .entry').length).toBeGreaterThan(0);
         });
   });

    /* This is the fourth test suite
     * Refer to app.js & HTML
    */
    describe('New Feed Selection', function() {
      let firstFeed,
          newFeed;

       beforeEach(function(done) {
         loadFeed(0, function() {
           firstFeed = $('.feed').html();
           loadFeed(1, function() {
             newFeed = $('.feed').html();
             done();
           });
         });
      });

        /* Test if the content changes when a new feed is loaded */
        it('should ensure new feed is loaded', function() {
            expect(newFeed).not.toEqual(firstFeed);
            });
        });

}());
