import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFinalnyjjProektГрафикиОтпускаLForm from './forms/i-i-s-finalnyjj-proekt-графики-отпуска-l';
import IISFinalnyjjProektДолжностиLForm from './forms/i-i-s-finalnyjj-proekt-должности-l';
import IISFinalnyjjProektОрганизацииLForm from './forms/i-i-s-finalnyjj-proekt-организации-l';
import IISFinalnyjjProektОтделыLForm from './forms/i-i-s-finalnyjj-proekt-отделы-l';
import IISFinalnyjjProektРасчетныйЛистLForm from './forms/i-i-s-finalnyjj-proekt-расчетный-лист-l';
import IISFinalnyjjProektСогласиеНаОпдLForm from './forms/i-i-s-finalnyjj-proekt-согласие-на-опд-l';
import IISFinalnyjjProektСотрудникиLForm from './forms/i-i-s-finalnyjj-proekt-сотрудники-l';
import IISFinalnyjjProektГрафикиОтпускаEForm from './forms/i-i-s-finalnyjj-proekt-графики-отпуска-e';
import IISFinalnyjjProektДолжностиEForm from './forms/i-i-s-finalnyjj-proekt-должности-e';
import IISFinalnyjjProektОрганизацииEForm from './forms/i-i-s-finalnyjj-proekt-организации-e';
import IISFinalnyjjProektОтделыEForm from './forms/i-i-s-finalnyjj-proekt-отделы-e';
import IISFinalnyjjProektРасчетныйЛистEForm from './forms/i-i-s-finalnyjj-proekt-расчетный-лист-e';
import IISFinalnyjjProektСогласиеНаОпдEForm from './forms/i-i-s-finalnyjj-proekt-согласие-на-опд-e';
import IISFinalnyjjProektСотрудникиEForm from './forms/i-i-s-finalnyjj-proekt-сотрудники-e';
import IISFinalnyjjProektГрафикиОтпускаModel from './models/i-i-s-finalnyjj-proekt-графики-отпуска';
import IISFinalnyjjProektДолжностиModel from './models/i-i-s-finalnyjj-proekt-должности';
import IISFinalnyjjProektОрганизацииModel from './models/i-i-s-finalnyjj-proekt-организации';
import IISFinalnyjjProektОтделыModel from './models/i-i-s-finalnyjj-proekt-отделы';
import IISFinalnyjjProektРасчетныйЛистModel from './models/i-i-s-finalnyjj-proekt-расчетный-лист';
import IISFinalnyjjProektСогласиеНаОпдModel from './models/i-i-s-finalnyjj-proekt-согласие-на-опд';
import IISFinalnyjjProektСоставРасчетаModel from './models/i-i-s-finalnyjj-proekt-состав-расчета';
import IISFinalnyjjProektСотрудникиModel from './models/i-i-s-finalnyjj-proekt-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-finalnyjj-proekt-графики-отпуска': IISFinalnyjjProektГрафикиОтпускаModel,
    'i-i-s-finalnyjj-proekt-должности': IISFinalnyjjProektДолжностиModel,
    'i-i-s-finalnyjj-proekt-организации': IISFinalnyjjProektОрганизацииModel,
    'i-i-s-finalnyjj-proekt-отделы': IISFinalnyjjProektОтделыModel,
    'i-i-s-finalnyjj-proekt-расчетный-лист': IISFinalnyjjProektРасчетныйЛистModel,
    'i-i-s-finalnyjj-proekt-согласие-на-опд': IISFinalnyjjProektСогласиеНаОпдModel,
    'i-i-s-finalnyjj-proekt-состав-расчета': IISFinalnyjjProektСоставРасчетаModel,
    'i-i-s-finalnyjj-proekt-сотрудники': IISFinalnyjjProektСотрудникиModel
  },

  'application-name': 'Модуль КЭДО',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Модуль КЭДО',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Модуль КЭДО',
          title: 'Модуль КЭДО'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'кадровые-документы': {
          caption: 'Кадровые_документы',
          title: 'Кадровые_документы',
          'i-i-s-finalnyjj-proekt-графики-отпуска-l': {
            caption: 'Графики отпуска',
            title: ''
          },
          'i-i-s-finalnyjj-proekt-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-finalnyjj-proekt-согласие-на-опд-l': {
            caption: 'Согласие на опд',
            title: ''
          },
          'i-i-s-finalnyjj-proekt-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          },
          'i-i-s-finalnyjj-proekt-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-finalnyjj-proekt-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-finalnyjj-proekt-отделы-l': {
            caption: 'Отделы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-finalnyjj-proekt-графики-отпуска-l': IISFinalnyjjProektГрафикиОтпускаLForm,
    'i-i-s-finalnyjj-proekt-должности-l': IISFinalnyjjProektДолжностиLForm,
    'i-i-s-finalnyjj-proekt-организации-l': IISFinalnyjjProektОрганизацииLForm,
    'i-i-s-finalnyjj-proekt-отделы-l': IISFinalnyjjProektОтделыLForm,
    'i-i-s-finalnyjj-proekt-расчетный-лист-l': IISFinalnyjjProektРасчетныйЛистLForm,
    'i-i-s-finalnyjj-proekt-согласие-на-опд-l': IISFinalnyjjProektСогласиеНаОпдLForm,
    'i-i-s-finalnyjj-proekt-сотрудники-l': IISFinalnyjjProektСотрудникиLForm,
    'i-i-s-finalnyjj-proekt-графики-отпуска-e': IISFinalnyjjProektГрафикиОтпускаEForm,
    'i-i-s-finalnyjj-proekt-должности-e': IISFinalnyjjProektДолжностиEForm,
    'i-i-s-finalnyjj-proekt-организации-e': IISFinalnyjjProektОрганизацииEForm,
    'i-i-s-finalnyjj-proekt-отделы-e': IISFinalnyjjProektОтделыEForm,
    'i-i-s-finalnyjj-proekt-расчетный-лист-e': IISFinalnyjjProektРасчетныйЛистEForm,
    'i-i-s-finalnyjj-proekt-согласие-на-опд-e': IISFinalnyjjProektСогласиеНаОпдEForm,
    'i-i-s-finalnyjj-proekt-сотрудники-e': IISFinalnyjjProektСотрудникиEForm
  },

});

export default translations;
