import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-finalnyjj-proekt-графики-отпуска-l');
  this.route('i-i-s-finalnyjj-proekt-графики-отпуска-e',
  { path: 'i-i-s-finalnyjj-proekt-графики-отпуска-e/:id' });
  this.route('i-i-s-finalnyjj-proekt-графики-отпуска-e.new',
  { path: 'i-i-s-finalnyjj-proekt-графики-отпуска-e/new' });
  this.route('i-i-s-finalnyjj-proekt-должности-l');
  this.route('i-i-s-finalnyjj-proekt-должности-e',
  { path: 'i-i-s-finalnyjj-proekt-должности-e/:id' });
  this.route('i-i-s-finalnyjj-proekt-должности-e.new',
  { path: 'i-i-s-finalnyjj-proekt-должности-e/new' });
  this.route('i-i-s-finalnyjj-proekt-организации-l');
  this.route('i-i-s-finalnyjj-proekt-организации-e',
  { path: 'i-i-s-finalnyjj-proekt-организации-e/:id' });
  this.route('i-i-s-finalnyjj-proekt-организации-e.new',
  { path: 'i-i-s-finalnyjj-proekt-организации-e/new' });
  this.route('i-i-s-finalnyjj-proekt-отделы-l');
  this.route('i-i-s-finalnyjj-proekt-отделы-e',
  { path: 'i-i-s-finalnyjj-proekt-отделы-e/:id' });
  this.route('i-i-s-finalnyjj-proekt-отделы-e.new',
  { path: 'i-i-s-finalnyjj-proekt-отделы-e/new' });
  this.route('i-i-s-finalnyjj-proekt-расчетный-лист-l');
  this.route('i-i-s-finalnyjj-proekt-расчетный-лист-e',
  { path: 'i-i-s-finalnyjj-proekt-расчетный-лист-e/:id' });
  this.route('i-i-s-finalnyjj-proekt-расчетный-лист-e.new',
  { path: 'i-i-s-finalnyjj-proekt-расчетный-лист-e/new' });
  this.route('i-i-s-finalnyjj-proekt-согласие-на-опд-l');
  this.route('i-i-s-finalnyjj-proekt-согласие-на-опд-e',
  { path: 'i-i-s-finalnyjj-proekt-согласие-на-опд-e/:id' });
  this.route('i-i-s-finalnyjj-proekt-согласие-на-опд-e.new',
  { path: 'i-i-s-finalnyjj-proekt-согласие-на-опд-e/new' });
  this.route('i-i-s-finalnyjj-proekt-сотрудники-l');
  this.route('i-i-s-finalnyjj-proekt-сотрудники-e',
  { path: 'i-i-s-finalnyjj-proekt-сотрудники-e/:id' });
  this.route('i-i-s-finalnyjj-proekt-сотрудники-e.new',
  { path: 'i-i-s-finalnyjj-proekt-сотрудники-e/new' });
});

export default Router;
