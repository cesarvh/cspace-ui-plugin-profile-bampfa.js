import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    formatRefName,
  } = pluginContext.formatHelpers;

  return {
    default: {
      objectNumber: {
        disabled: true,
      },
      title: {
        disabled: true,
      },
      effectiveObjectNumber: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.effectiveObjectNumber',
            defaultMessage: 'ID number',
          },
        }),
        order: 10,
        sortBy: 'collectionobjects_bampfa:sortableEffectiveObjectNumber',
        width: 150,
      },
      bampfaObjectProductionPerson: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.bampfaObjectProductionPerson',
            defaultMessage: 'Artist or maker',
          },
        }),
        order: 15,
        sortBy: 'collectionobjects_bampfa:bampfaObjectProductionPersonGroupList/0/bampfaObjectProductionPerson',
        width: 225,
      },
      bampfaTitle: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.bampfaTitle',
            defaultMessage: 'Title',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_bampfa:bampfaTitleGroupList/0/bampfaTitle',
        width: 275,
      },
    },
  };
};
