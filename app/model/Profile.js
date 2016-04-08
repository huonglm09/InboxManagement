Ext.define('InboxManagement.model.Profile', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['firstName', 'lastName', 'email']
});