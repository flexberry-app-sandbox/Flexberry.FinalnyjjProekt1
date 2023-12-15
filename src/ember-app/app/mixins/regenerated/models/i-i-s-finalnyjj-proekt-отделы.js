import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string'),
  организации: DS.belongsTo('i-i-s-finalnyjj-proekt-организации', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-отделы.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-отделы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-отделы.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтделыE', 'i-i-s-finalnyjj-proekt-отделы', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    организации: belongsTo('i-i-s-finalnyjj-proekt-организации', 'Организации', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('ОтделыL', 'i-i-s-finalnyjj-proekt-отделы', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    организации: belongsTo('i-i-s-finalnyjj-proekt-организации', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
