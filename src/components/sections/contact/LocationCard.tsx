import { useState } from "react";
import { FadeIn } from "@/components/animations";
import { GlassCard } from "@/components/ui";
import { contactData } from "@/data/content/contact";
import { Clock, Compass, ExternalLink, MapPin, Navigation } from "@/lib/icons";

export function LocationCard() {
  const { officeLocation } = contactData;
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div id="location" className="scroll-mt-24">
      <GlassCard className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl h-full flex flex-col justify-between shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>National Headquarters</span>
            </div>
            {officeLocation.hours.isOpenNow && (
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Open Office Hours
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {officeLocation.title}
          </h3>

          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            {officeLocation.address}, {officeLocation.city}, {officeLocation.state} {officeLocation.pincode}, {officeLocation.country}
          </p>

          {/* Map Section */}
          <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 mb-6 group">
            {/* Map Loading Skeleton */}
            {!mapLoaded && (
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2 animate-bounce">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-xs text-slate-400 font-medium">Loading Interactive Map...</p>
              </div>
            )}

            {/* Embedded Iframe Map */}
            <iframe
              title={`Map showing location of ${officeLocation.title}`}
              src={officeLocation.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Floating Quick Direct Button on Map */}
            <div className="absolute bottom-3 right-3 z-20">
              <a
                href={officeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-emerald-600 text-white text-xs font-semibold shadow-lg border border-slate-700 hover:border-emerald-500 transition-all ds-focus"
                aria-label="Open directions to InAmigos HQ in Google Maps"
              >
                <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>

          {/* Landmark Callout */}
          <FadeIn>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1">
                    Nearby Landmark
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {officeLocation.landmark}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Operating Hours Summary */}
          <div className="flex items-center gap-3 text-xs text-slate-400 p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
            <div>
              <span className="font-semibold text-slate-300">{officeLocation.hours.days}:</span>{" "}
              {officeLocation.hours.hours} ({officeLocation.hours.timezone})
            </div>
          </div>
        </div>

        {/* Action Button: Get Directions */}
        <div className="pt-6 border-t border-slate-800 mt-6">
          <a
            href={officeLocation.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 ds-focus"
          >
            <Navigation className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Get Directions to Head Office</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          </a>
        </div>
      </GlassCard>
    </div>
  );
}
