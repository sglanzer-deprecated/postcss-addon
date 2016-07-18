import Ember from 'ember';
import layout from '../templates/components/not-gonna-eat';
import styles from '../styles/components/not-gonna-eat';

export default Ember.Component.extend({
  classNameBindings: ['styles.hello'],
  layout,
  styles
});
