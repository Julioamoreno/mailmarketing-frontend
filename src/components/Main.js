import React from 'react';

import '../App.css';

function Main(){
    return(
        <>
            <section id="page">
            
            </section>
            <main id="content">
            <section className="row">
                <div className="col s12">
                <router-view></router-view>
                </div>
            </section>
            </main>
        </>
    );
}

export default Main;