import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnyjj-proekt-должности', 'Unit | Model | i-i-s-finalnyjj-proekt-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-finalnyjj-proekt-графики-отпуска',
    'model:i-i-s-finalnyjj-proekt-должности',
    'model:i-i-s-finalnyjj-proekt-организации',
    'model:i-i-s-finalnyjj-proekt-отделы',
    'model:i-i-s-finalnyjj-proekt-расчетный-лист',
    'model:i-i-s-finalnyjj-proekt-согласие-на-опд',
    'model:i-i-s-finalnyjj-proekt-состав-расчета',
    'model:i-i-s-finalnyjj-proekt-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
