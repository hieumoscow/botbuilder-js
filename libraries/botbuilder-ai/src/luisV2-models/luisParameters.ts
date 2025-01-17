/**
 * @module botbuilder-ai
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import * as msRest from '@azure/ms-rest-js';

export const appId: msRest.OperationURLParameter = {
    parameterPath: 'appId',
    mapper: {
        required: true,
        serializedName: 'appId',
        type: {
            name: 'String',
        },
    },
};
export const bingSpellCheckSubscriptionKey: msRest.OperationQueryParameter = {
    parameterPath: ['options', 'bingSpellCheckSubscriptionKey'],
    mapper: {
        serializedName: 'bing-spell-check-subscription-key',
        type: {
            name: 'String',
        },
    },
};
export const endpoint: msRest.OperationURLParameter = {
    parameterPath: 'endpoint',
    mapper: {
        required: true,
        serializedName: 'Endpoint',
        defaultValue: '',
        type: {
            name: 'String',
        },
    },
    skipEncoding: true,
};
export const log: msRest.OperationQueryParameter = {
    parameterPath: ['options', 'log'],
    mapper: {
        serializedName: 'log',
        type: {
            name: 'Boolean',
        },
    },
};
export const spellCheck: msRest.OperationQueryParameter = {
    parameterPath: ['options', 'spellCheck'],
    mapper: {
        serializedName: 'spellCheck',
        type: {
            name: 'Boolean',
        },
    },
};
export const staging: msRest.OperationQueryParameter = {
    parameterPath: ['options', 'staging'],
    mapper: {
        serializedName: 'staging',
        type: {
            name: 'Boolean',
        },
    },
};
export const timezoneOffset: msRest.OperationQueryParameter = {
    parameterPath: ['options', 'timezoneOffset'],
    mapper: {
        serializedName: 'timezoneOffset',
        type: {
            name: 'Number',
        },
    },
};
export const verbose: msRest.OperationQueryParameter = {
    parameterPath: ['options', 'verbose'],
    mapper: {
        serializedName: 'verbose',
        type: {
            name: 'Boolean',
        },
    },
};
