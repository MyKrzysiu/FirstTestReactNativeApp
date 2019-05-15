import Currency  from '../models/Currency';

interface DataInterface {
}

class Data implements DataInterface {
    private static instance: Data;

    static getInstance() {
        if (!Data.instance) {
            Data.instance = new Data();
        }
        return Data.instance;
    }

    public getCurrencyList = async (): Promise<Array> => {
        const result = await this.getFetchData('http://api.nbp.pl/api/exchangerates/tables/A?format=json');
        return result[0].rates.map((item: any) => new Currency(item.currency, item.code, item.mid));
    }

    private getFetchData = async (url: string, cacheKey?: string, useToken: boolean = true, asJson: boolean = true) => {
        const object = {
            method: 'GET',
        };

        if (__DEV__) {
            console.log('__GET__', url);
        }

        return await fetch(url, object)
            .then(response => response.json())
            .then(function (response) {
                return response;
            })
            .catch((error: Error) => {
                console.log(url);
                if (__DEV__) {
                    throw error;
                }
            });
    }
}

export default Data.getInstance();