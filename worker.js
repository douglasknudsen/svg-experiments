/**
 * Created with IntelliJ IDEA.
 * User: universalmind
 * Date: 2/26/13
 * Time: 11:49 PM
 * To change this template use File | Settings | File Templates.
 */



self.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case 'build':

            self.postMessage( buildSamples( data.sampleSize ));
            break;
        case 'stop':
            self.postMessage('WORKER STOPPED: ' + data.msg + '. (buttons will no longer work)');
            self.close(); // Terminates the worker.
            break;
        default:
            self.postMessage('Unknown command: ' + data.msg);
    };
}, false);




function buildSamples( sampleSize )    {
    samples = new Uint32Array( sampleSize + 1 );
    inside = 0;
    outside = 0;
    for( var i=0; i < sampleSize; i++)   {
        x = Math.random();
        y = Math.random();

        if( x*x + y*y <= 1)
        {
            inside++;
        }
        else
        {
            outside++;
        }
        samples.push( [x,y] );
    }

    samples.push( [ inside, outside ] );


}