/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The Xamarin SDK bundle
 *
 */
class ListXamarinSDKBundlesOKResponseItem {
  /**
   * Create a ListXamarinSDKBundlesOKResponseItem.
   * @property {string} [monoVersion] The Mono version
   * @property {string} [sdkBundle] The Xamarin SDK version
   * @property {boolean} [current] If the SDK is latest stable
   * @property {boolean} [stable] If the SDK is stable
   * @property {array} [xcodeVersions] Specific for iOS SDK. A list of Xcode
   * versions supported by current SDK version
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListXamarinSDKBundlesOKResponseItem
   *
   * @returns {object} metadata of ListXamarinSDKBundlesOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListXamarinSDKBundlesOKResponseItem',
      type: {
        name: 'Composite',
        className: 'ListXamarinSDKBundlesOKResponseItem',
        modelProperties: {
          monoVersion: {
            required: false,
            serializedName: 'monoVersion',
            type: {
              name: 'String'
            }
          },
          sdkBundle: {
            required: false,
            serializedName: 'sdkBundle',
            type: {
              name: 'String'
            }
          },
          current: {
            required: false,
            serializedName: 'current',
            type: {
              name: 'Boolean'
            }
          },
          stable: {
            required: false,
            serializedName: 'stable',
            type: {
              name: 'Boolean'
            }
          },
          xcodeVersions: {
            required: false,
            serializedName: 'xcodeVersions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListXamarinSDKBundlesOKResponseItem;
