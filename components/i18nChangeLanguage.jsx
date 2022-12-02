import { PureComponent } from 'react';
import { observer } from 'mobx-react';
import i18NextMobx, { changeLanguage } from 'i18next-mobx';
import { LanguageName } from '../models/i18n';

@observer
class I18nChangeLanguage extends PureComponent {
  render() {
    return (
      <>
        {
          <select
            value={i18NextMobx.currentLanguage}
            onChange={({ currentTarget: { value } }) => changeLanguage(value)}
          >
            {Object.entries(LanguageName).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        }
      </>
    );
  }
}

export default I18nChangeLanguage;
