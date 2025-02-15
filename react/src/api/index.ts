//source https://www.riksbank.se/sv/press-och-publicerat/kalender/helgdagar-2025/
//This json file should be replaced by some form of content management system data,
//to give control of the system to the citys toll administration.
//I translated the month name "maj" to "may" to english because apparently
//its ok with swedish names for days but not for months.
import holidaysAsJSON from './holidays.json';

//mock api call to get holidays, should be replaced with actual api call to the cms
export function getHolidays() {
  return holidaysAsJSON.holidays;
}
