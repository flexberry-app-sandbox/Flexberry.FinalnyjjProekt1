import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnyjj-proekt-сотрудники', 'Unit | Serializer | i-i-s-finalnyjj-proekt-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-finalnyjj-proekt-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-finalnyjj-proekt-тип',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
