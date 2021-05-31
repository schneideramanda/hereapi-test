const routeData = [
  { "lat": -8.368400000, "lng": -35.031000000},
  { "lat": -8.370300000, "lng": -35.031400000},
  { "lat": -8.366200000, "lng": -35.028600000},
  { "lat": -8.328500000, "lng": -35.009400000},
  { "lat": -8.291700000, "lng": -35.026700000},
  { "lat": -8.265700000, "lng": -35.018500000},
  { "lat": -8.241000000, "lng": -35.004000000},
  { "lat": -8.198800000, "lng": -34.977900000},
  { "lat": -8.177900000, "lng": -34.950100000},
  { "lat": -8.168100000, "lng": -34.937700000},
  { "lat": -8.150100000, "lng": -34.943100000},
  { "lat": -8.139100000, "lng": -34.947000000},
  { "lat": -8.119600000, "lng": -34.942800000},
  { "lat": -8.117700000, "lng": -34.943500000},
  { "lat": -8.108700000, "lng": -34.947100000},
  { "lat": -8.078500000, "lng": -34.942900000},
  { "lat": -8.064600000, "lng": -34.941400000},
  { "lat": -8.067600000, "lng": -34.944500000},
  { "lat": -8.068600000, "lng": -34.947000000},
  { "lat": -8.072100000, "lng": -34.957700000},
  { "lat": -8.079200000, "lng": -34.987600000},
  { "lat": -8.090400000, "lng": -35.025400000},
  { "lat": -8.095400000, "lng": -35.072000000},
  { "lat": -8.113600000, "lng": -35.115200000},
  { "lat": -8.107500000, "lng": -35.158200000},
  { "lat": -8.110600000, "lng": -35.200200000},
  { "lat": -8.115000000, "lng": -35.250900000},
  { "lat": -8.135900000, "lng": -35.293600000},
  { "lat": -8.134700000, "lng": -35.339300000},
  { "lat": -8.140700000, "lng": -35.380600000},
  { "lat": -8.154500000, "lng": -35.419400000},
  { "lat": -8.167400000, "lng": -35.454400000},
  { "lat": -8.172800000, "lng": -35.480600000},
  { "lat": -8.188800000, "lng": -35.504900000},
  { "lat": -8.190000000, "lng": -35.507700000},
  { "lat": -8.193200000, "lng": -35.550300000},
  { "lat": -8.201000000, "lng": -35.591600000},
  { "lat": -8.215100000, "lng": -35.637600000},
  { "lat": -8.221800000, "lng": -35.682600000},
  { "lat": -8.236400000, "lng": -35.731700000},
  { "lat": -8.255200000, "lng": -35.774000000},
  { "lat": -8.281500000, "lng": -35.812200000},
  { "lat": -8.299600000, "lng": -35.852500000},
  { "lat": -8.293200000, "lng": -35.883200000},
  { "lat": -8.293200000, "lng": -35.883300000},
  { "lat": -8.293200000, "lng": -35.883200000},
  { "lat": -8.293200000, "lng": -35.883300000},
  { "lat": -8.293200000, "lng": -35.883200000},
  { "lat": -8.293200000, "lng": -35.883300000},
  { "lat": -8.293200000, "lng": -35.883200000},
  { "lat": -8.293200000, "lng": -35.883300000},
  { "lat": -8.293200000, "lng": -35.883200000},
  { "lat": -8.293200000, "lng": -35.883300000},
  { "lat": -8.293200000, "lng": -35.883200000},
  { "lat": -8.293200000, "lng": -35.883300000},
  { "lat": -8.296200000, "lng": -35.893000000},
  { "lat": -8.304700000, "lng": -35.930600000},
  { "lat": -8.308400000, "lng": -35.953800000},
  { "lat": -8.303900000, "lng": -35.972800000},
  { "lat": -8.304800000, "lng": -36.011300000},
  { "lat": -8.313500000, "lng": -36.042200000},
  { "lat": -8.320600000, "lng": -36.078500000},
  { "lat": -8.320500000, "lng": -36.079000000},
  { "lat": -8.320600000, "lng": -36.079000000},
  { "lat": -8.321200000, "lng": -36.086700000},
  { "lat": -8.329400000, "lng": -36.122700000},
  { "lat": -8.328700000, "lng": -36.146900000},
  { "lat": -8.359300000, "lng": -36.172200000},
  { "lat": -8.409000000, "lng": -36.188200000},
  { "lat": -8.457200000, "lng": -36.214100000},
  { "lat": -8.491200000, "lng": -36.234700000},
  { "lat": -8.491300000, "lng": -36.235000000},
  { "lat": -8.491400000, "lng": -36.235000000},
  { "lat": -8.491300000, "lng": -36.235000000},
  { "lat": -8.500400000, "lng": -36.245200000},
  { "lat": -8.543900000, "lng": -36.269900000},
  { "lat": -8.590000000, "lng": -36.289900000},
  { "lat": -8.634200000, "lng": -36.306000000},
  { "lat": -8.657600000, "lng": -36.326900000},
  { "lat": -8.665100000, "lng": -36.360200000},
  { "lat": -8.674200000, "lng": -36.399400000},
  { "lat": -8.707500000, "lng": -36.418300000},
  { "lat": -8.738500000, "lng": -36.430900000},
  { "lat": -8.773800000, "lng": -36.427100000},
  { "lat": -8.812700000, "lng": -36.444700000},
  { "lat": -8.843300000, "lng": -36.458600000},
  { "lat": -8.867100000, "lng": -36.462000000},
  { "lat": -8.878700000, "lng": -36.483600000},
  { "lat": -8.876800000, "lng": -36.500900000},
  { "lat": -8.874600000, "lng": -36.528700000},
  { "lat": -8.882600000, "lng": -36.576200000},
  { "lat": -8.895800000, "lng": -36.627500000},
  { "lat": -8.904100000, "lng": -36.659600000},
  { "lat": -8.911600000, "lng": -36.688700000},
  { "lat": -8.933700000, "lng": -36.720600000},
  { "lat": -8.942000000, "lng": -36.720900000},
  { "lat": -8.951900000, "lng": -36.723600000},
  { "lat": -8.964000000, "lng": -36.758800000},
  { "lat": -8.964100000, "lng": -36.758900000},
  { "lat": -8.967600000, "lng": -36.807700000},
  { "lat": -8.997700000, "lng": -36.850800000},
  { "lat": -9.009000000, "lng": -36.868300000},
  { "lat": -9.009100000, "lng": -36.868400000},
  { "lat": -9.009000000, "lng": -36.868300000},
  { "lat": -9.009100000, "lng": -36.868400000},
  { "lat": -9.012000000, "lng": -36.871700000},
  { "lat": -9.041900000, "lng": -36.912200000},
  { "lat": -9.072900000, "lng": -36.955400000},
  { "lat": -9.101900000, "lng": -36.993500000},
  { "lat": -9.126700000, "lng": -37.020400000},
  { "lat": -9.128300000, "lng": -37.072000000},
  { "lat": -9.129800000, "lng": -37.115600000},
  { "lat": -9.129800000, "lng": -37.115500000},
  { "lat": -9.129800000, "lng": -37.115600000},
  { "lat": -9.131500000, "lng": -37.142200000},
  { "lat": -9.132800000, "lng": -37.192100000},
  { "lat": -9.134600000, "lng": -37.242900000},
  { "lat": -9.136500000, "lng": -37.293300000},
  { "lat": -9.138200000, "lng": -37.339200000},
  { "lat": -9.153000000, "lng": -37.390800000},
  { "lat": -9.169300000, "lng": -37.440500000},
  { "lat": -9.184500000, "lng": -37.487200000},
  { "lat": -9.184600000, "lng": -37.487300000},
  { "lat": -9.197200000, "lng": -37.526100000},
  { "lat": -9.213100000, "lng": -37.574700000},
  { "lat": -9.229600000, "lng": -37.625400000},
  { "lat": -9.244300000, "lng": -37.669800000},
  { "lat": -9.260900000, "lng": -37.720100000},
  { "lat": -9.275200000, "lng": -37.762800000},
  { "lat": -9.275200000, "lng": -37.762900000},
  { "lat": -9.288100000, "lng": -37.807200000},
  { "lat": -9.288600000, "lng": -37.809800000},
  { "lat": -9.299400000, "lng": -37.863000000},
  { "lat": -9.310200000, "lng": -37.916700000},
  { "lat": -9.320900000, "lng": -37.957800000},
  { "lat": -9.325300000, "lng": -37.969900000},
  { "lat": -9.342500000, "lng": -38.018300000},
  { "lat": -9.359800000, "lng": -38.068300000},
  { "lat": -9.377900000, "lng": -38.121300000},
  { "lat": -9.396300000, "lng": -38.169300000},
  { "lat": -9.396500000, "lng": -38.169600000},
  { "lat": -9.406500000, "lng": -38.189300000},
  { "lat": -9.427000000, "lng": -38.200500000},
  { "lat": -9.427200000, "lng": -38.200500000},
  { "lat": -9.446700000, "lng": -38.213200000},
  { "lat": -9.440900000, "lng": -38.207700000},
  { "lat": -9.444500000, "lng": -38.202500000},
  { "lat": -9.468900000, "lng": -38.205500000},
  { "lat": -9.519200000, "lng": -38.218900000},
  { "lat": -9.559900000, "lng": -38.222300000},
  { "lat": -9.569200000, "lng": -38.223200000},
  { "lat": -9.597600000, "lng": -38.225500000},
  { "lat": -9.649700000, "lng": -38.224000000},
  { "lat": -9.692300000, "lng": -38.227600000},
  { "lat": -9.743500000, "lng": -38.242500000},
  { "lat": -9.743500000, "lng": -38.242600000},
  { "lat": -9.779600000, "lng": -38.250200000},
  { "lat": -9.829500000, "lng": -38.260500000},
  { "lat": -9.878300000, "lng": -38.270000000},
  { "lat": -9.923500000, "lng": -38.280000000},
  { "lat": -9.953100000, "lng": -38.301000000},
  { "lat": -9.990100000, "lng": -38.313600000},
  { "lat": -9.990000000, "lng": -38.313500000},
  { "lat": -9.995400000, "lng": -38.314300000},
  { "lat": -10.028300000, "lng": -38.326800000},
  { "lat": -10.052500000, "lng": -38.339900000},
  { "lat": -10.072100000, "lng": -38.341900000},
  { "lat": -10.078700000, "lng": -38.340200000},
  { "lat": -10.096100000, "lng": -38.313100000},
  { "lat": -10.138400000, "lng": -38.295900000},
  { "lat": -10.178100000, "lng": -38.282800000},
  { "lat": -10.180000000, "lng": -38.283500000},
  { "lat": -10.202200000, "lng": -38.290900000},
  { "lat": -10.227700000, "lng": -38.298500000},
  { "lat": -10.267600000, "lng": -38.306000000},
  { "lat": -10.305800000, "lng": -38.311300000},
  { "lat": -10.306900000, "lng": -38.311300000},
  { "lat": -10.338100000, "lng": -38.320100000},
  { "lat": -10.361400000, "lng": -38.333700000},
  { "lat": -10.371500000, "lng": -38.338300000},
  { "lat": -10.397900000, "lng": -38.351700000},
  { "lat": -10.455200000, "lng": -38.382600000},
  { "lat": -10.488600000, "lng": -38.384000000},
  { "lat": -10.532300000, "lng": -38.383600000},
  { "lat": -10.566200000, "lng": -38.374100000},
  { "lat": -10.595000000, "lng": -38.373300000},
  { "lat": -10.595100000, "lng": -38.373500000},
  { "lat": -10.622600000, "lng": -38.394200000},
  { "lat": -10.624300000, "lng": -38.395100000},
  { "lat": -10.667800000, "lng": -38.418800000},
  { "lat": -10.696600000, "lng": -38.449500000},
  { "lat": -10.728900000, "lng": -38.485200000},
  { "lat": -10.753300000, "lng": -38.507200000},
  { "lat": -10.758500000, "lng": -38.509100000},
  { "lat": -10.799700000, "lng": -38.524200000},
  { "lat": -10.824700000, "lng": -38.545200000},
  { "lat": -10.841000000, "lng": -38.571400000},
  { "lat": -10.860900000, "lng": -38.605900000},
  { "lat": -10.884400000, "lng": -38.648900000},
  { "lat": -10.914500000, "lng": -38.687300000},
  { "lat": -10.944200000, "lng": -38.723600000},
  { "lat": -10.956300000, "lng": -38.742600000},
  { "lat": -10.970700000, "lng": -38.764200000},
  { "lat": -10.987700000, "lng": -38.799100000},
  { "lat": -10.988900000, "lng": -38.803100000},
  { "lat": -10.989100000, "lng": -38.803500000},
  { "lat": -10.989100000, "lng": -38.803400000},
  { "lat": -10.989100000, "lng": -38.803500000},
  { "lat": -10.989100000, "lng": -38.803400000},
  { "lat": -10.989100000, "lng": -38.803500000},
  { "lat": -10.989100000, "lng": -38.803400000},
  { "lat": -10.989100000, "lng": -38.803500000},
  { "lat": -10.989100000, "lng": -38.803400000},
  { "lat": -10.989100000, "lng": -38.803500000},
  { "lat": -10.989200000, "lng": -38.803500000},
  { "lat": -10.989100000, "lng": -38.803500000},
  { "lat": -10.989100000, "lng": -38.803400000},
  { "lat": -10.989100000, "lng": -38.803500000},
  { "lat": -10.992900000, "lng": -38.804300000},
  { "lat": -11.025600000, "lng": -38.824400000},
  { "lat": -11.047600000, "lng": -38.838000000},
  { "lat": -11.075000000, "lng": -38.836300000},
  { "lat": -11.111700000, "lng": -38.830100000},
  { "lat": -11.151200000, "lng": -38.848500000},
  { "lat": -11.198500000, "lng": -38.871300000},
  { "lat": -11.198500000, "lng": -38.871500000},
  { "lat": -11.223700000, "lng": -38.889300000},
  { "lat": -11.241900000, "lng": -38.902200000},
  { "lat": -11.242100000, "lng": -38.902400000},
  { "lat": -11.281000000, "lng": -38.926500000},
  { "lat": -11.328000000, "lng": -38.952400000},
  { "lat": -11.345600000, "lng": -38.960500000},
  { "lat": -11.358200000, "lng": -38.962300000},
  { "lat": -11.398100000, "lng": -38.967900000},
  { "lat": -11.426600000, "lng": -38.974100000},
  { "lat": -11.443700000, "lng": -38.981000000},
  { "lat": -11.467800000, "lng": -38.990500000},
  { "lat": -11.481400000, "lng": -38.996000000},
  { "lat": -11.511700000, "lng": -38.994900000},
  { "lat": -11.555600000, "lng": -38.989800000},
  { "lat": -11.595600000, "lng": -38.985300000},
  { "lat": -11.616900000, "lng": -38.983000000},
  { "lat": -11.621300000, "lng": -38.982500000},
  { "lat": -11.651900000, "lng": -38.992400000},
  { "lat": -11.676200000, "lng": -38.995800000},
  { "lat": -11.707900000, "lng": -38.986700000},
  { "lat": -11.754300000, "lng": -38.986100000},
  { "lat": -11.774600000, "lng": -38.985800000},
  { "lat": -11.803400000, "lng": -38.981800000},
  { "lat": -11.855400000, "lng": -38.976700000},
  { "lat": -11.903700000, "lng": -38.982700000},
  { "lat": -11.905800000, "lng": -38.982900000},
  { "lat": -11.948900000, "lng": -38.977400000},
  { "lat": -11.967000000, "lng": -38.973800000},
  { "lat": -11.982800000, "lng": -38.972100000},
  { "lat": -12.021900000, "lng": -38.971000000},
  { "lat": -12.064800000, "lng": -38.969800000},
  { "lat": -12.074200000, "lng": -38.969600000},
  { "lat": -12.090600000, "lng": -38.969200000},
  { "lat": -12.124700000, "lng": -38.968200000},
  { "lat": -12.169300000, "lng": -38.965000000},
  { "lat": -12.191000000, "lng": -38.965300000},
  { "lat": -12.220800000, "lng": -38.965600000},
  { "lat": -12.231700000, "lng": -38.970400000},
  { "lat": -12.246400000, "lng": -38.986800000},
  { "lat": -12.283400000, "lng": -38.998900000},
  { "lat": -12.298600000, "lng": -39.035100000},
  { "lat": -12.330800000, "lng": -39.064800000},
  { "lat": -12.361200000, "lng": -39.103600000},
  { "lat": -12.390000000, "lng": -39.145000000},
  { "lat": -12.405300000, "lng": -39.174900000},
  { "lat": -12.416800000, "lng": -39.192900000},
  { "lat": -12.439900000, "lng": -39.229400000}]

window.rotaVeiculo = routeData;