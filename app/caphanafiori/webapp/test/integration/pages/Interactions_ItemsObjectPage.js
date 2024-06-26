sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.caphanafiori',
            componentId: 'Interactions_ItemsObjectPage',
            contextPath: '/Interactions_Header/ITEMS'
        },
        CustomPageDefinitions
    );
});