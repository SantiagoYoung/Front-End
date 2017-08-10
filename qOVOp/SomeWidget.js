/**
 *
 * Created by Neon on 2017/8/10.
 */

define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dojo/text!./qOVOp/templates/SomeWidget.html"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template) {
    return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
        //	set our template
        templateString: template,

        //	some properties
        baseClass: "someWidget",
        title: "12312312132131232",	//	we'll set this from the widget def

        postCreate: function(){
            this.titleNode.innerHTML = this.title;
        }
    });
});