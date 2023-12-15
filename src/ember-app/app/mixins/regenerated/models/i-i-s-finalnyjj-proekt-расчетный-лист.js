import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-proekt-сотрудники', { inverse: null, async: false }),
  составРасчета: DS.hasMany('i-i-s-finalnyjj-proekt-состав-расчета', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-расчетный-лист.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-расчетный-лист.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-расчетный-лист.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составРасчета: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt-расчетный-лист.validations.составРасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-finalnyjj-proekt-расчетный-лист', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    составРасчета: hasMany('i-i-s-finalnyjj-proekt-состав-расчета', 'Состав расчета', {
      тип: attr('Тип', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      ндфл: attr('Ндфл', { index: 3 }),
      взносы: attr('Взносы', { index: 4 }),
      всего: attr('Всего', { index: 5 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-finalnyjj-proekt-расчетный-лист', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
