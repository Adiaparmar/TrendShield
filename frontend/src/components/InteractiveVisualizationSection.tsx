import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ToggleLeft, ZoomIn } from "lucide-react";

export default function InteractiveVisualizationSection(){
  // Data for interactive features
  const interactiveFeatures = [
    {
      icon: <ZoomIn className="w-6 h-6" />,
      title: "Zoom & Pan",
      description:
        "Use the scrollwheel to zoom in/out or click and drag to pan across the timeline.",
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "Hover Tooltips",
      description:
        "Hover over any data point to see detailed information about price, time, and anomaly classification.",
    },
    {
      icon: <ToggleLeft className="w-6 h-6" />,
      title: "Toggle Views",
      description:
        "Switch between different visualization modes to focus on normal data, anomalies, or clustering results.",
    },
  ];

  // Data for clustering analysis
  const clusterTypes = [
    {
      color: "bg-[#3498db]",
      label: "Cluster 1: Normal Price Fluctuations",
    },
    {
      color: "bg-[#2ecc71]",
      label: "Cluster 2: Periodic Trading Patterns",
    },
    {
      color: "bg-[#f39c12]",
      label: "Cluster 3: Heightened Volatility",
    },
    {
      color: "bg-[#e74c3c]",
      label: "Outliers: Potential Anomalies",
    },
  ];

  // Time range options
  const timeRangeOptions = [
    { label: "1W", active: true },
    { label: "1M", active: false },
    { label: "3M", active: false },
    { label: "1Y", active: false },
  ];

  return (
    <section className="w-full bg-neutral-50 py-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#2c3e50] font-['Roboto-Bold'  ] mb-3">
            Interactive Price History Visualization
          </h2>
          <p className="text-lg text-gray-600 font-['Open_Sans-Regular'  ] max-w-3xl mx-auto">
            Explore historical price data with our advanced visualization tools.
            Anomalies are highlighted in
            <br />
            red, making it easy to identify suspicious patterns.
          </p>
        </div>

        {/* Main Visualization Card */}
        <Card className="mb-10 shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-0 pt-8 px-8">
            <div>
              <CardTitle className="text-xl text-[#2c3e50] font-['Roboto-Bold'  ]">
                Price History Analysis
              </CardTitle>
              <p className="text-base text-gray-600 font-['Open_Sans-Regular'  ]">
                Last 30 days of trading activity
              </p>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-[#3498db] hover:bg-[#2980b9] text-white">
                View All Data
              </Button>
              <Button
                variant="outline"
                className="border-[#3498db] text-[#3498db] hover:bg-[#3498db]/10"
              >
                Anomalies Only
              </Button>
              <Button
                variant="outline"
                className="border-[#3498db] text-[#3498db] hover:bg-[#3498db]/10"
              >
                Show Clusters
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            {/* Chart Placeholder */}
            <div className="w-full h-[500px] bg-[url(/image.png)] bg-cover bg-center mb-6" />

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {/* Time Range Panel */}
              <div className="bg-neutral-100 rounded-md p-4">
                <h4 className="text-sm font-bold text-gray-500 font-['Roboto-Bold'  ] mb-2">
                  TIME RANGE
                </h4>
                <div className="flex space-x-4">
                  {timeRangeOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant={option.active ? "default" : "outline"}
                      className={`h-[30px] w-[45px] px-0 ${option.active ? "bg-[#3498db] hover:bg-[#2980b9]" : "border-gray-300 text-gray-700"}`}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Detected Anomalies Panel */}
              <div className="bg-neutral-100 rounded-md p-4">
                <h4 className="text-sm font-bold text-gray-500 font-['Roboto-Bold'  ] mb-2">
                  DETECTED ANOMALIES
                </h4>
                <p className="text-2xl font-bold text-[#e74c3c] font-['Open_Sans-Bold'  ]">
                  27
                </p>
                <p className="text-sm text-gray-500 font-['Open_Sans-Regular'  ]">
                  in selected timeframe
                </p>
              </div>

              {/* Confidence Score Panel */}
              <div className="bg-neutral-100 rounded-md p-4">
                <h4 className="text-sm font-bold text-gray-500 font-['Roboto-Bold'  ] mb-2">
                  CONFIDENCE SCORE
                </h4>
                <p className="text-2xl font-bold text-[#2c3e50] font-['Open_Sans-Bold'  ]">
                  94%
                </p>
                <p className="text-sm text-gray-500 font-['Open_Sans-Regular'  ]">
                  ML model confidence
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Cards Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Interactive Features Card */}
          <Card className="shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] overflow-hidden">
            <CardHeader className="pt-6 pb-2 px-6">
              <CardTitle className="text-xl text-[#2c3e50] font-['Roboto-Bold'  ]">
                Interactive Features
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="space-y-6">
                {interactiveFeatures.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mr-2 mt-0.5">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-base text-gray-700 font-['Open_Sans-Bold'  ]">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-['Open_Sans-Regular'  ]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Clustering Analysis Card */}
          <Card className="shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] overflow-hidden">
            <CardHeader className="pt-6 pb-2 px-6">
              <CardTitle className="text-xl text-[#2c3e50] font-['Roboto-Bold'  ]">
                Clustering Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-base text-gray-600 font-['Open_Sans-Regular'  ] mb-5">
                K-Means clustering helps identify patterns in pricing data by
                grouping similar price movements
                <br />
                together, making anomalies easier to detect.
              </p>

              <div className="bg-neutral-100 rounded-md p-4 mb-5">
                {clusterTypes.map((cluster, index) => (
                  <div key={index} className="flex items-center mb-4 last:mb-0">
                    <Badge
                      className={`w-3 h-3 rounded-full p-0 ${cluster.color}`}
                    />
                    <span className="ml-2 text-[15.1px] text-gray-800 font-['Open_Sans-Regular'  ]">
                      {cluster.label}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#3498db] hover:bg-[#2980b9]">
                View Detailed Cluster Analysis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
