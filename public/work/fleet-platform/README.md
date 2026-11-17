# Fleet Dispatch - real Rails screenshots

These are unmodified browser captures of the running Rails application, using isolated synthetic development fixtures. They are not the standalone HTML mockups or evidence of a production deployment.

- Source repository: `seanbman/fleet-platform`, branch `dev`
- Source commit: `e3104d358da21acfb131d9f8949ffd1fc02dfe8c`
- Captured November 17, 2026 by the successful [Rails browser workflow](https://github.com/seanbman/fleet-platform/actions/runs/44146209571).
- Artifact: `fleet-live-rails-ui`, ID `14356857075`
- Capture script: `docs/scripts/verify_live_ui.py`; synthetic records: `docs/scripts/seed_visual_fixtures.rb`
- All 14 images were visually inspected before copying here. Fixture customer names, example addresses, contact details and technician labels are synthetic.

## Desktop

| Screen | 1600px wide | 1280px wide |
| --- | --- | --- |
| Dispatch and schedule | [Screenshot](1600_dispatch.png) | [Screenshot](1280_dispatch.png) |
| Customer directory | [Screenshot](1600_customers.png) | [Screenshot](1280_customers.png) |
| Intake requests | [Screenshot](1600_intake.png) | [Screenshot](1280_intake.png) |
| Work-order closure | - | [Screenshot](1280_wq009_closure.png) |

## Mobile - 430px wide

- [Dispatch and schedule](430_dispatch.png)
- [Customer directory](430_customers.png)
- [Scheduling dialog](430_schedule_modal.png)
- [Technician Today](430_technician.png)
- [Technician work order](430_technician_work_order.png)
- [Saved visit progress](430_technician_progress.png)
- [Reported blocker and follow-up](430_technician_blocker.png)

Full-page mobile captures may be taller than the 932px browser viewport. The disabled Map control and unfinished navigation destinations must not be presented as implemented features. This collection does not change the website's Work page or claim visual acceptance of the app.
