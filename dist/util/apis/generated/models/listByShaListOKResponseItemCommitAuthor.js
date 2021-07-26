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
 * Class representing a ListByShaListOKResponseItemCommitAuthor.
 */
class ListByShaListOKResponseItemCommitAuthor {
  /**
   * Create a ListByShaListOKResponseItemCommitAuthor.
   * @property {string} [date] Date and time of the commit
   * @property {string} [name] Author name
   * @property {string} [email] Author's email
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListByShaListOKResponseItemCommitAuthor
   *
   * @returns {object} metadata of ListByShaListOKResponseItemCommitAuthor
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListByShaListOKResponseItem_commit_author',
      type: {
        name: 'Composite',
        className: 'ListByShaListOKResponseItemCommitAuthor',
        modelProperties: {
          date: {
            required: false,
            serializedName: 'date',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: false,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListByShaListOKResponseItemCommitAuthor;
