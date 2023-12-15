import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаНач: DS.attr('date'),
  колДней: DS.attr('number'),
  номер: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-proekt-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-графики-отпуска.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНач: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-графики-отпуска.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колДней: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-графики-отпуска.validations.колДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-графики-отпуска.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-графики-отпуска.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-графики-отпуска.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикиОтпускаE', 'i-i-s-finalnyjj-proekt-графики-отпуска', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    датаНач: attr('Дата начала отпуска', { index: 2 }),
    колДней: attr('Количество дней', { index: 3 }),
    отправлено: attr('Отправлено', { index: 4 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ГрафикиОтпускаL', 'i-i-s-finalnyjj-proekt-графики-отпуска', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    датаНач: attr('Дата начала отпуска', { index: 2 }),
    колДней: attr('Количество дней', { index: 3 }),
    отправлено: attr('Отправлено', { index: 4 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
