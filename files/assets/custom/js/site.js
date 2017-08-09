config.site = $('.page-content-wrapper.site');

/*
 * Click actions
 */

    /*
    * when change site selection get site information
    */
$(config.site).on('change', '.site-selection', function(){
    getSiteInfo($(this).val());
    getSitePackages($(this).val());
    getSitePredictions($(this).val());
    getSiteResultStatusAndClass($(this).val());
});

/*
 * this will populate website selection
 */
function getAllSitesIdsAndNames() {

    $.ajax({
        url: config.coreUrl + "/site/ids-and-names",
        type: "get",
        success: function (response) {

            var data = {
                sites: response,
            }
            var element = config.site;

            var template = element.find('.template-site-selection').html();
            var compiledTemplate = Template7.compile(template);
            var html = compiledTemplate(data);
            element.find('.site-selection').html(html).change();
        },
         error: function () {}
    });
}

// get site general informations
function getSiteInfo(siteId) {
    $.ajax({
        url: config.coreUrl + "/site/" + siteId,
        type: "get",
        success: function (response) {

            // show site name in front;
            showSiteName(response);
            showSiteGeneralConfiguration(response);
        },
         error: function () {}
    });
}

// show site name in h1
function showSiteName(data) {
    var element = config.site;
    var template = element.find('.template-site-general').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(data);
    element.find('.site-general').html(html);
}

// show site general configuration
function showSiteGeneralConfiguration(data) {
    var element = config.site;
    var template = element.find('.template-site-name').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(data);
    element.find('.site-name').html(html);
}



// get site packages
function getSitePackages(siteId) {
    $.ajax({
        url: config.coreUrl + "/package-site/" + siteId,
        type: "get",
        success: function (response) {

            var data = {
                packages: response,
            }

            showPackagesTabs(data);
            showPackagesTabsContent(data);
        },
         error: function () {}
    });
}

// show packages tabs
function showPackagesTabs(data) {
    var element = config.site;
    var template = element.find('.template-package-tab').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(data);
    element.find('.package-tab').html(html);

    element.find('.package-tab li').first().addClass('active');
}

// show packages tabs content
function showPackagesTabsContent(data) {
    var element = config.site;
    var template = element.find('.template-package-tab-content').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(data);
    element.find('.package-tab-content').html(html);

    element.find('.package-tab-content .tab-pane').first().addClass('active in');
}



// get site predictions name
function getSitePredictions(siteId) {
    $.ajax({
        url: config.coreUrl + "/site-prediction/" + siteId,
        type: "get",
        success: function (response) {

            var data = {
                predictionGroup: response,
            }

            showSitePredictionsNames(data);
        },
         error: function () {}
    });
}

// show predictions name
function showSitePredictionsNames(data) {
    var element = config.site;
    var template = element.find('.template-site-prediction-name').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(data);
    element.find('.site-prediction-name').html(html);
}



// get site results status names and classes
function getSiteResultStatusAndClass(siteId) {
    $.ajax({
        url: config.coreUrl + "/site-result-status/" + siteId,
        type: "get",
        success: function (response) {

            var data = {
                status: response,
            }
            showSiteResultStatusNameAndClass(data)
        },
         error: function () {}
    });
}

// show result status
function showSiteResultStatusNameAndClass(data) {
    var element = config.site;
    var template = element.find('.template-site-result-status').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(data);
    element.find('.site-result-status').html(html);
}




















