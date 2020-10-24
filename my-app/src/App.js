import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [rent, setRent] = useState('');
    const [period, setPeriod] = useState('12');
    const [vacancyRate, setVacancyRate] = useState('10');
    const [oe, setOe] = useState('');
    const [p, setP] = useState('');

    let gei = (rent * period * (1 - vacancyRate / 100));
    let noi = gei - oe;
    let ry = (noi / p) * 100;
    ry = ((Math.ceil(ry * 100)) / 100);
    let pbp = p / noi;
    pbp = ((Math.ceil(pbp * 100)) / 100);

    return (
        <div className="App">
            <div>Исходные данные</div>
            <div>Арендная плата <input type="number"
                                       name="rent"
                                       value={rent}
                                       onChange={(event) =>
                                           setRent(event.target.value)}/> &nbsp;

                <select onChange={(event) => setPeriod(event.target.value)}>
                    <option value="52">еженедельный</option>
                    <option selected value="12">в месяц</option>
                    <option value="1">в год</option>
                </select>
            </div>
            <div>Средняя доля вакантных площадей <input type="number"
                                                        name="vacancyRate"
                                                        value={vacancyRate}
                                                        onChange={(event) =>
                                                            setVacancyRate(event.target.value)}/> %
            </div>
            <div>Ожидаемый брутто-доход (ежегодный) <input type="number"
                                                           name="gei"
                                                           value={gei}
                                                           disabled={true}/>
            </div>
            <div>Операционные расходы (ежегодный) <input type="number"
                                                         name="oe"
                                                         value={oe}
                                                         onChange={(event) =>
                                                             setOe(event.target.value)}/>
            </div>
            <div>Чистый операционный доход или ЧОД (ежегодный) <input type="number"
                                                                      name="noi"
                                                                      value={noi}
                                                                      disabled={true}/>
            </div>
            <div>Цена недвижимости <input type="number"
                                          name="p"
                                          onChange={(event) =>
                                              setP(event.target.value)}/>
            </div>
            <div>Результат</div>
            <div>Доходность от аренды / Ставка капитализации <input type="number"
                                                                    name="ry"
                                                                    value={ry}
                                                                    disabled={true}/> %
            </div>
            <div>Срок окупаемости <input type="number"
                                         name="pbp"
                                         value={pbp}
                                         disabled={true}/> года
            </div>
        </div>
    )
}

export default App;