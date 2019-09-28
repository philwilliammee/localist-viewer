# Localist Viewer

## [Demo Page](https://philwilliammee.github.io/localist-viewer/)

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
