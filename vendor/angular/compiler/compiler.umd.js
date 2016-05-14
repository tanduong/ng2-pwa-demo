/**
 * @license AngularJS v$$ANGULAR_VERSION$$
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, function () {
    'use strict';
    goog.module('_angular$compiler');
    var compiler_1 = goog.require('_angular$compiler$compiler');
    exports.ElementSchemaRegistry = compiler_1.ElementSchemaRegistry;
    exports.COMPILER_PROVIDERS = compiler_1.COMPILER_PROVIDERS;
    exports.TEMPLATE_TRANSFORMS = compiler_1.TEMPLATE_TRANSFORMS;
    exports.CompilerConfig = compiler_1.CompilerConfig;
    exports.RenderTypes = compiler_1.RenderTypes;
    exports.UrlResolver = compiler_1.UrlResolver;
    exports.DEFAULT_PACKAGE_URL_PROVIDER = compiler_1.DEFAULT_PACKAGE_URL_PROVIDER;
    exports.createOfflineCompileUrlResolver = compiler_1.createOfflineCompileUrlResolver;
    exports.XHR = compiler_1.XHR;
    exports.ViewResolver = compiler_1.ViewResolver;
    exports.DirectiveResolver = compiler_1.DirectiveResolver;
    exports.PipeResolver = compiler_1.PipeResolver;
    exports.SourceModule = compiler_1.SourceModule;
    exports.NormalizedComponentWithViewDirectives = compiler_1.NormalizedComponentWithViewDirectives;
    exports.OfflineCompiler = compiler_1.OfflineCompiler;
    exports.RuntimeCompiler = compiler_1.RuntimeCompiler;
    exports.CompileMetadataWithIdentifier = compiler_1.CompileMetadataWithIdentifier;
    exports.CompileMetadataWithType = compiler_1.CompileMetadataWithType;
    exports.CompileIdentifierMetadata = compiler_1.CompileIdentifierMetadata;
    exports.CompileDiDependencyMetadata = compiler_1.CompileDiDependencyMetadata;
    exports.CompileProviderMetadata = compiler_1.CompileProviderMetadata;
    exports.CompileFactoryMetadata = compiler_1.CompileFactoryMetadata;
    exports.CompileTokenMetadata = compiler_1.CompileTokenMetadata;
    exports.CompileTypeMetadata = compiler_1.CompileTypeMetadata;
    exports.CompileQueryMetadata = compiler_1.CompileQueryMetadata;
    exports.CompileTemplateMetadata = compiler_1.CompileTemplateMetadata;
    exports.CompileDirectiveMetadata = compiler_1.CompileDirectiveMetadata;
    exports.CompilePipeMetadata = compiler_1.CompilePipeMetadata;
    exports.TextAst = compiler_1.TextAst;
    exports.BoundTextAst = compiler_1.BoundTextAst;
    exports.AttrAst = compiler_1.AttrAst;
    exports.BoundElementPropertyAst = compiler_1.BoundElementPropertyAst;
    exports.BoundEventAst = compiler_1.BoundEventAst;
    exports.ReferenceAst = compiler_1.ReferenceAst;
    exports.VariableAst = compiler_1.VariableAst;
    exports.ElementAst = compiler_1.ElementAst;
    exports.EmbeddedTemplateAst = compiler_1.EmbeddedTemplateAst;
    exports.BoundDirectivePropertyAst = compiler_1.BoundDirectivePropertyAst;
    exports.DirectiveAst = compiler_1.DirectiveAst;
    exports.ProviderAst = compiler_1.ProviderAst;
    exports.ProviderAstType = compiler_1.ProviderAstType;
    exports.NgContentAst = compiler_1.NgContentAst;
    exports.PropertyBindingType = compiler_1.PropertyBindingType;
    exports.templateVisitAll = compiler_1.templateVisitAll;
}));