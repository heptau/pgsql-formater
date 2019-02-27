'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const vscode_1 = require("vscode");
const camelCase = require('camelcase');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

function upperCase(str) {
  return str.toUpperCase();
}

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.pgsqlFormatter', () => {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
      return; // No open text editor
    }
    // Texto selecionado
    var selection = editor.selection;
    var text = editor.document.getText(selection);
    var texto = ' ' + text + ' ';

    var keywords = 'select|from|where|order by|group by|limit|inner join|left join|right join|full join|join|in|on|between|and|or|update|set|insert|into|values|delete';
    texto = texto.replace(RegExp('[^A-Z](' + keywords + ')[^A-Z]','img'), upperCase);
    texto = texto.replace(RegExp('^(' + keywords + ')[^A-Z]','img'), upperCase);
    texto = texto.replace(RegExp('[^A-Z](' + keywords + ')$','img'), upperCase);
    texto = texto.replace(RegExp('^(' + keywords + ')$','img'), upperCase);
/*
    var funcoesPgsql = ["ASCII", "ASC", "DESC", "CHAR_LENGTH", "CHARACTER_LENGTH", "CONCAT", "GROUP_CONCAT", "CONCAT_WS", "FIELD", "FIND_IN_SET", "FORMAT", "INSERT", "INSTR", "LCASE", "WHEN", "LEFT", "LENGTH", "LOCATE", "LOWER", "LPAD", "LTRIM", "MID", "POSITION", "REPEAT", "REPLACE", "REVERSE", "RIGHT", "RPAD", "RTRIM", "SPACE", "STRCMP", "SUBSTR", "SUBSTRING", "SUBSTRING_INDEX", "TRIM", "UCASE", "UPPER", "ABS", "ACOS", "ASIN", "ATAN", "ATAN2", "AVG", "CEIL", "CEILING", "COS", "COT", "COUNT", "DEGREES", "DIV", "EXP", "FLOOR", "GREATEST", "LEAST", "LN", "LOG", "LOG10", "LOG2", "MAX", "MIN", "MOD", "PI", "POW", "POWER", "RADIANS", "RAND", "ROUND", "SIGN", "SIN", "SQRT", "SUM", "TAN", "TRUNCATE", "ADDDATE", "ADDTIME", "CURDATE", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURTIME", "DATE", "DATE_ADD", "DATE_FORMAT", "DATE_SUB", "DATEDIFF", "DAY", "DAYNAME", "DAYOFMONTH", "DAYOFWEEK", "DAYOFYEAR", "EXTRACT", "FROM_DAYS", "HOUR", "LAST_DAY", "LOCALTIME", "LOCALTIMESTAMP", "MAKEDATE", "MAKETIME", "MICROSECOND", "MINUTE", "MONTH", "MONTHNAME", "NOW", "PERIOD_ADD", "PERIOD_DIFF", "QUARTER", "SEC_TO_TIME", "SECOND", "STR_TO_DATE", "SUBDATE", "SUBTIME", "SYSDATE", "TIME", "TIME_FORMAT", "TIME_TO_SEC", "TIMEDIFF", "TIMESTAMP", "TO_DAYS", "WEEK", "WEEKDAY", "WEEKOFYEAR", "YEAR", "YEARWEEK", "BIN", "BINARY", "CASE", "CAST", "COALESCE", "CONNECTION_ID", "CONV", "CONVERT", "CURRENT_USER", "IF", "IFNULL", "ISNULL", "LAST_INSERT_ID", "NULLIF", "SESSION_USER", "SYSTEM_USER", "USER", "VERSION", "SHA1", "ENCRYPT", "MD5", "OLD_PASSWORD", "PASSWORD", "IS NOT NULL", "IS NULL", "NULL"];
*/
    var range = new vscode_1.Range(editor.selection.start, editor.selection.end);
    texto = texto.substring(1, (texto.length - 1));
    vscode.window.activeTextEditor.edit(editBuilder => {
      editBuilder.replace(range, texto);
    });
  });
  context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
