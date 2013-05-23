mocha.setup('tdd');

suite('slidebox directive', function () {
    var assert = chai.assert,
        el, scope;

    setup(module('Slidebox'));

    setup(inject(function($rootScope, $compile) {
        el = angular.element(
            '<slidebox content-width="getWidth()">Lorem Ipsum</slidebox>'
        );

        scope = $rootScope;
        scope.width = '1000px';
        scope.getWidth = function () {
            return this.width;
        }
        $compile(el)(scope);
        scope.$digest();
    }));

    test('should have content and controls', function () {
        assert.equal(el.find('.slidebox-content').length, 1);
        assert.equal(el.find('.slidebox-controls').length, 2);
        assert.equal(el.find('.slidebox-left').length, 1);
        assert.equal(el.find('.slidebox-right').length, 1);
    });

    test('should bind correct content width', function () {
        var content = el.find('.slidebox-content');

        assert.equal(content[0].style.width, '1000px');

        // test ems
        scope.$apply(function () {
            scope.width = '200em';
        });
        assert.equal(content[0].style.width, '200em');
    });

    test('should use px for unspecified width units', function () {
        var content = el.find('.slidebox-content');

        scope.$apply(function () {
            scope.width = 2000;
        });
        assert.equal(content[0].style.width, '2000px');
    });

    test('should begin scrolled left', function () {
        assert.equal(el[0].scrollLeft, 0);
    });

});