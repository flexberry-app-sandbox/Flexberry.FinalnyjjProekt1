import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  название: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-организации.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-организации.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацииE', 'i-i-s-finalnyjj-proekt-организации', {
    код: attr('Код', { index: 0 }),
    название: attr('Название', { index: 1 })
  });

  modelClass.defineProjection('ОрганизацииL', 'i-i-s-finalnyjj-proekt-организации', {
    код: attr('Код', { index: 0 }),
    название: attr('Название', { index: 1 })
  });
};
