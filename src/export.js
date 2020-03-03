
import {
  renderTotal, renderDate,
  renderHours, recMatchesMode
} from './lib'

export function toCSV([mode,list]){
  return `data:text/csv;base64,${btoa(
      list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
        const [date,time,comment] = [renderDate(c[0]),renderHours(c[1]),c[2]];
        return p += `${date},${time},${comment}\n`;
      },'')
    )}`;
};

export function toMailURL([mode,list,user,mailToAddress]){
  return (
    `mailto:?to=${mailToAddress}` +
    `&subject=${encodeURIComponent(`Overtime ${user}`)}` +
    `&body=${encodeURIComponent(
      "Hi,\n" +
      "this is my overtime report as tab separated values,\n" +
      "you can copy paste them directly into excel or google docs,\n\n" +
      "Best regards,\n" +
      `${user}\n\n` +
      "------------------------------------------------\n" +
      list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
        return p += `${renderDate(c[0])}\t${renderHours(c[1])}\t${c[2]}\n`;
      },'') +
      "------------------------------------------------\n"
    )}`
)};
