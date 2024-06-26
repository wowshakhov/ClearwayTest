https://github.com/wowshakhov/ClearwayTest/assets/22027198/6b4eb07e-0d19-4374-a0ba-26ed81afe722

# Следующие шаги

- Порефакторить хранение аннотаций. Вынести логику по добавлению/изменению/удалению из компонента DocumentViewer. Выбрать между функциональными обновлениями и мутациями
- Вынести некоторые компоненты: страница документа вместе с onImageLoad и naturalImageWidths, вытащить отдельный компонент-модалку из AnnotationEditor
- Вынести некоторые функции из компонентов в сервисы или отдельные файлы, например onImageUploaded
- Поправить структуру проекта: переместить annotation-data.ts, сделать отдельную папку для интерфейсов/моделей/сервисов 
- Реализовать z-index'ы для аннотаций, ресайз картинок(?)
- Добавить обработку ошибок

# Clearway

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
