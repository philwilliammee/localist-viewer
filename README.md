# Localist Viewer

## [Demo Page](https://philwilliammee.github.io/localist-viewer/docs) | [Tests](https://philwilliammee.github.io/localist-viewer/coverage/lcov-report/)

## Installation

Install with NPM [package: localist-viewer](https://philwilliammee.github.io/localist-viewer/)

```bash
npm install localist-viewer
```

CDN

```html
<script src="https://cdn.jsdelivr.net/npm/localist-viewer@latest/build/index.js"></script>
```

## Usage

The exported function takes the following arguments.

```js
    {
        target: 'string - the target id',
        heading: 'string the block heading',
        calendarurl: 'string the url of the localist events calendar',
        apikey: 'string the localist apikey',
        format: 'string the template format 6 options',
        entries: 'string the number of event entries to show',
        daysahead: 'string the number of events to pull max is 365',
        depts: 'string filters department ids',
        group: 'string filters by group name',
        keyword: 'string filters by keyword',
        hidedescription: 'string [true, false] hides the event description',
        truncatedescription: 'string the truncate length',
        hideimages: 'string [true, false] hides the images',
        hideaddcal: 'string [true, false] hides the calendar links',
        hidepagination: 'string [true, false] hides the pagination',
        filterby: 'string [options] exposed filter',
        wrapperclass: 'string css classes to add to wrapper',
        listclass: 'string css class to add to list',
        itemclass: 'string css class to add to event',
    }
```

Demo code example

```html
<div id="feature"
    class="events-listing cwd-events-style"
    data-target="feature"
    data-depts="0"
    data-entries="3"
    data-format="modern_compact"
    data-group="0"
    data-keyword=""
    data-heading="Upcoming Events Demo"
    data-calendarurl="//events.cornell.edu/api/2.1/events"
    data-apikey=""
    data-daysahead="2"
    data-hidedescription="false"
    data-truncatedescription="200"
    data-hideimages="false"
    data-hideaddcal="true"
    data-hidepagination="false"
    data-filterby="none"
    data-wrapperclass="cwd-card-grid three-card"
    data-listclass="cards"
    data-itemclass="card"
    >
</div>
<script src="https://cdn.jsdelivr.net/npm/localist-viewer@latest/build/index.js"></script>
<script>
    const elem = document.getElementById('feature');
    const data = { ...elem.dataset };
    Localist(data);
</script>
```
