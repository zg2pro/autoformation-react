import * as React from 'react';
import './engine.css';
import * as data from './data.json';
import * as jq from 'json-query';

class Engine extends React.Component {

    keywords: string[];

    render() {
        return (
            this.execute().value.map(function (item: any) {
                return <dl>
                    <dd>question</dd>
                    <dt>answer</dt>
                </dl>
            }).join('')
        );
    }

    execute() {
        return jq('parsable[*question=versions]', {data: data});
    }

}

export default Engine;
