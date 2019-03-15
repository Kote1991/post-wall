import React, { Component } from 'react';
import NoDataBanner from '../components/no-data'

const NoDataHOC = (WrapperComponent) => {
    return class extends Component {
        render() {
            let withData = <WrapperComponent {...this.props}  baColor="red"/>;
            let NoData = <NoDataBanner />
            return (
                <div>
                    {this.props.posts.length > 0 ?  withData  :  NoData }
                </div>
            )
        }
    }
}

export default NoDataHOC;